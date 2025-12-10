import React from "react";

// Single-file demo showing common ways to use `children` in React.
// Default export is a demo App you can drop into a Create React App / Vite project.

export default function App() {
    return (
        <div className="min-h-screen bg-gray-50 p-6 font-sans">
            <header className="max-w-3xl mx-auto mb-6">
                <h1 className="text-2xl font-bold">React children — live examples</h1>
                <p className="text-sm text-gray-600">Open the examples below to see different patterns for using <code>children</code>.</p>
            </header>

            <main className="max-w-3xl mx-auto space-y-6">
                <Section title="1) Basic wrapper (props.children)">
                    <BasicWrapper>
                        <p>This is plain content passed as <code>children</code>. Wrappers are the simplest use-case.</p>
                    </BasicWrapper>
                </Section>

                <Section title="2) Multiple children & React.Children utilities">
                    <MultiList>
                        <li>First item</li>
                        <li>Second item</li>
                        <li>Third item</li>
                    </MultiList>
                </Section>

                <Section title="3) Function-as-child (render prop / children as function)">
                    <ToggleBox>
                        {({on, toggle}) => (
                            <div>
                                <button className="px-3 py-1 rounded bg-indigo-600 text-white" onClick={toggle}>
                                    {on ? 'Turn off' : 'Turn on'}
                                </button>
                                <div className="mt-2">Current state: <strong>{String(on)}</strong></div>
                            </div>
                        )}
                    </ToggleBox>
                </Section>

                <Section title="4) Injecting props into children (React.cloneElement)">
                    <PropInjector>
                        <ChildShowsInjected />
                        <ChildShowsInjected />
                    </PropInjector>
                </Section>

                <Section title="5) Tips: only() / toArray / keys">
                    <div className="text-sm text-gray-700">
                        This demo uses <code>React.Children.count</code> and <code>React.Children.toArray</code> inside the components above — check their implementations to learn how to safely iterate or enforce a single child.
                    </div>
                </Section>
            </main>
        </div>
    );
}

function Section({title, children}){
    return (
        <section className="bg-white border rounded-lg p-4 shadow-sm">
            <h2 className="font-medium mb-3">{title}</h2>
            <div>{children}</div>
        </section>
    );
}

// 1) Basic wrapper
function BasicWrapper({children}){
    return (
        <div className="border-l-4 border-indigo-400 bg-indigo-50 p-3 rounded">
            {children}
        </div>
    );
}

// 2) Multi-list showing safe iteration of children
function MultiList({children}){
    // React.Children.toArray ensures we have a flat array and stable keys
    const arr = React.Children.toArray(children);
    return (
        <ul className="list-disc pl-6">
            {arr.map((c, i) => (
                <li key={i}>{c}</li>
            ))}
        </ul>
    );
}

// 3) Function-as-child pattern
function ToggleBox({children}){
    const [on, setOn] = React.useState(false);
    const toggle = () => setOn(o => !o);

    // children is expected to be a function here
    return (
        <div className="p-3 border rounded">
            {typeof children === 'function' ? children({on, toggle}) : children}
        </div>
    );
}

// 4) Inject props into children using cloneElement
function PropInjector({children}){
    return (
        <div className="p-3 border rounded space-y-2">
            {React.Children.map(children, (child, idx) => {
                if (React.isValidElement(child)) {
                    // add an injected prop called `injected`
                    return React.cloneElement(child, {injected: `from-injector-${idx}`});
                }
                return child;
            })}
        </div>
    );
}

function ChildShowsInjected({injected}){
    return (
        <div className="px-3 py-2 bg-gray-100 rounded">Injected prop: <strong>{String(injected)}</strong></div>
    );
}

// End of file

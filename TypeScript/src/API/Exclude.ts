type EventType = 'scroll' | 'click' | 'mouseenter' | 'mouseleave';

type ExcludeEventType = Exclude<EventType, 'click'>

const handleEvent = (event: ExcludeEventType):void =>{
    console.log("handleEvent", event)
}

handleEvent('scroll')
import java.util.*;
public class Main {
    public int[][] solution(int n, int m, char[] figures) {
        int[][] grid = new int[n][m];
        Map<Character, int[][]> shapes = new HashMap<>();
        shapes.put('A', new int[][] { {0,0} });
        shapes.put('B', new int[][] { {0,0}, {0,1}, {0,2}, {1,1} });
        shapes.put('C', new int[][] { {0,0}, {0,1}, {1,0}, {1,1} });
        shapes.put('D', new int[][] { {0,0}, {1,0}, {2,0}, {1,1} });
        shapes.put('E', new int[][] { {0,1}, {1,0}, {1,1}, {1,2} });
        for (int idx = 0; idx < figures.length; idx++) {
            char fig = figures[idx];
            int id = idx + 1;
            int[][] pattern = shapes.get(fig);
            boolean placed = false;
            for (int r = 0; r < n && !placed; r++) {
                for (int c = 0; c < m && !placed; c++) {
                    if (canPlace(grid, n, m, r, c, pattern)) {
                        for (int[] d : pattern) {
                            int rr = r + d[0];
                            int cc = c + d[1];
                            grid[rr][cc] = id;
                        }
                        placed = true;
                    }
                }
            }
        }
        return grid;
    }
    private boolean canPlace(int[][] grid, int n, int m, int r, int c, int[][] pattern) {
        for (int[] d : pattern) {
            int rr = r + d[0];
            int cc = c + d[1];
            if (rr < 0 || rr >= n || cc < 0 || cc >= m) return false;
            if (grid[rr][cc] != 0) return false;
        }
        return true;
    }
    public static void main(String[] args) {
        Main sol = new Main();

        // Example from screenshots: n=4,m=4, figures = ['D','B','A','C']
        char[] figs1 = new char[] {'D','B','A','C'};
        int[][] out1 = sol.solution(4,4,figs1);
        printGrid(out1);

        System.out.println();

        // Another example: n=3,m=5, figures = ['A','D','E']
        char[] figs2 = new char[] {'A','D','E'};
        int[][] out2 = sol.solution(3,5,figs2);
        printGrid(out2);
    }

    private static void printGrid(int[][] g) {
        for (int[] row : g) {
            System.out.println(Arrays.toString(row));
        }
    }
}

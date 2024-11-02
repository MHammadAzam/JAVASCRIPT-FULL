
#include<iostream>
using namespace std;
class Board {
protected:
    char board[3][3];

public:
    Board() {
        for (int i = 0; i < 3; ++i) {
            for (int j = 0; j < 3; ++j) {
                board[i][j] = ' ';
            }
        }
    }

    void display() {
        for (int i = 0; i < 3; ++i) {
            for (int j = 0; j < 3; ++j) {
                cout << board[i][j];
                if (j < 2) cout << " | ";
            }
            cout << endl;
            if (i < 2) cout << "---------" << endl;
        }
    }

    bool updateBoard(int row, int col, char symbol) {
        if (board[row][col] == ' ') {
            board[row][col] = symbol;
            return true;
        }
        return false;
    }

    bool isFull() {
        for (int i = 0; i < 3; ++i) {
            for (int j = 0; j < 3; ++j) {
                if (board[i][j] == ' ') return false;
            }
        }
        return true;
    }


    bool checkWinner(char symbol) {
        // Check rows
        for (int i = 0; i < 3; ++i) {
            if (board[i][0] == symbol && board[i][1] == symbol && board[i][2] == symbol) return true;
        }

        // Check columns
        for (int i = 0; i < 3; ++i) {
            if (board[0][i] == symbol && board[1][i] == symbol && board[2][i] == symbol) return true;
        }

        // Check diagonals
        if (board[0][0] == symbol && board[1][1] == symbol && board[2][2] == symbol) return true;
        if (board[0][2] == symbol && board[1][1] == symbol && board[2][0] == symbol) return true;

        return false;
    }
};

class TicTacToe : public Board {
private:
    char currentTurn;

public:
    TicTacToe() : Board() {
        currentTurn = 'X';
    }

    void switchTurn() {
        currentTurn = (currentTurn == 'X') ? 'O' : 'X';
    }

    void play() {
        int row, col;
        while (true) {
            display();
            cout << "Player " << currentTurn << ", enter row (0-2): ";
            cin >> row;
            cout << "Player " << currentTurn << ", enter col (0-2): ";
            cin >> col;

            if (row < 0 || row > 2 || col < 0 || col > 2 || !updateBoard(row, col, currentTurn)) {
                cout << "Invalid move. Try again." << endl;
                continue;
            }

            if (checkWinner(currentTurn)) {
                display();
                cout << "Player " << currentTurn << " wins!" << endl;
                break;
            }

            if (isFull()) {
                display();
                cout << "The game is a draw!" << endl;
                break;
            }

            switchTurn();
        }
    }
};

int main() {
    TicTacToe game;
    game.play();
    return 0;
}
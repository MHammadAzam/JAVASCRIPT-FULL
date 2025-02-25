#include <iostream>
using namespace std;
class Shape {
public:
    void setWidth(int w) {
        width = w;
    }

    void setHeight(int h) {
        height = h;
    }

protected:
    int width;
    int height;
};

class Rectangle : public Shape {
public:
    int getArea() {
        return (width * height);
    }
};

int main() {
    Rectangle rect;

    rect.setWidth(5);
    rect.setHeight(10);

    cout << "Area of the rectangle: " << rect.getArea() << endl;


    return 0;
}

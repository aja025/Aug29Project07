class MainController 
{
    constructor() 
    {
        this.output = 0;
        this.first = 0;
        this.second = 0;
    }
    add()
    {
        this.output = this.first + this.second;
    }
    sub()
    {
        this.output = this.first - this.second;
    }
    prod()
    {
        this.output = this.first * this.second;
    }
    div()
    {
        this.output = this.first / this.second;
    }

}
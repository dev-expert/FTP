#include <iostream>
using namespace std;
int main()
{
   int n,c3{0},c5{0};
   cin>>n;
   for(int i{1};i<=n;i++)
   {
       c3++;
       c5++;
       string d="";
       if(c3==3){d+="Fizz";c3=0;}
       if(c5==5){d+="Buzz";c5=0;}
       if(d==""){cout<<i<<endl;}
       else{cout<<d<<endl;}
   }
}

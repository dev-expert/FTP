#include<iostream>
#include<iomanip>
using namespace std;
int main()
{
    int n;
    double pos=0.000,neg=0.000,zer=0.000;
    cin>>n;
    float arr[n];
    for(int i=0;i<n;i++)
    {
        cin>>arr[i];
           if(arr[i]<0)
            {
                neg++;
            }
            if(arr[i]>0)
            {
                pos++;
            }
            if(arr[i]==0)
            {
                zer++;
            }
    }
    cout<<fixed<<setprecision(6)<<neg/n<<endl;
    cout<<fixed<<setprecision(6)<<pos/n<<endl;
    cout<<fixed<<setprecision(6)<<zer/n<<endl;
}
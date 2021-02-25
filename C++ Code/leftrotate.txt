#include<iostream>
#include<bits/stdc++.h>
using namespace std;
int main()
{
    int n,rotat;
    cin>>n;
    cin>>rotat;
     int m=n-(rotat%n);
    int a[n];
    for(int i=0;i<n;i++)
    {
        cin>>a[i];
        
    }
 rotate(a,a+m,a+n);
  cout<<"=================="<<endl;
  for(int i=0;i<n;i++)
  { 
      cout<<a[i]<<endl;
      
  }
 
//   cout<<"=================="<<endl;
//   for(int i=0;i<n;i++)
//   { 
//       cout<<a[(m+i)%n]<<endl;
      
//   }
}
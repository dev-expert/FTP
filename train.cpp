#include<bits/stdc++.h>
using namespace std;
int main()
{int n;
cin>>n;
int arr[n];
int dep[n];
for(int i=0;i<n;i++)
{cin>>arr[i];}
for(int i=0;i<n;i++)
{cin>>dep[i];}
int hash[10000]={0};
for(int i=0;i<n;i++)
{for(int j=arr[i];j<=dep[i];j++)
{hash[j]=hash[j]+1;}}
int res=0;
for(int i=0;i<10000;i++)
{res=max(res,hash[i]);}
cout<<endl<<res;
}
#include<bits/stdc++.h>
using namespace std;
int main()
{ unordered_map<int,int>mp;
    int n;
    cout<<"Enter size= ";
    cin>>n;
    int arr[n];
    cout<<"Enter the Elements !!";
    for(int i=0;i<n;i++)
    {
        cin>>arr[i];
        mp[arr[i]]=mp[arr[i]]+1;
    }
    cout<<endl;
    unordered_map<int,int>:: iterator it=mp.begin(); 
    while(it!=mp.end())
    {
        if(it->second==1)
        {
            cout<<"Unique Element== "<<it->first<<endl;
            
        } 
        it++;
   }
}
const getId=()=>{
    setTimeout(()=>{
        console.log('getting Id');

        let id=[123,234,345,456,567];
        console.log(id);

        setTimeout((ids)=>{
        const data={
            name: 'Saim',
            age: 21
        }  
        console.log('My name is ${data.name} and i am ${detail.age} years old');

        },2000, id[1]);
        },2000);
    }
    getId();

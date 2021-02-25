var fi= require('fs')
fi.readFile('module1.js','utf8',function(err,data)
{
    console.log(data)
})

fi.writeFile('prac.js','console.log("Writing File")',function(err)
{
    console.log("Data is Saved")
})

fi.appendFile('prac.js','console.log("Writing File")',function(err)
{
    console.log("Data is Saved")
})
fi.unlink('prac.js',function(err)
{
    console.log("Deleted")
})
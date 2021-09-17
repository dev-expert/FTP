import java.io.IOException;
import java.util.*;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.Iterator;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import io.github.bonigarcia.wdm.WebDriverManager;

public class SeleniumTestData{

public static void main(String[] args) {

String homePage = "https://web1.appwrk.com/";
String url = "";
HttpURLConnection huc = null;
int respCode = 200;
int count=0;
int skip=0;
int broken=0;
Collection<String> list = new LinkedList<String>();




WebDriverManager.chromedriver().setup();
WebDriver driver = new ChromeDriver();

driver.manage().window().maximize();

driver.get(homePage);

List<WebElement> links = driver.findElements(By.tagName("a"));

Iterator<WebElement> it = links.iterator();

System.out.println(" Total No of links are "+ links.size());  

while(it.hasNext()){

url = it.next().getAttribute("href");

//System.out.println(url);

if(url == null || url.isEmpty()){
System.out.println("URL is either not configured for anchor tag or it is empty");
continue;
}

if(!url.startsWith(homePage)){
	skip++;
System.out.println(url+ "URL belongs to another domain, skipping it.");
continue;
}

try {
huc = (HttpURLConnection)(new URL(url).openConnection());

huc.setRequestMethod("HEAD");

huc.connect();

respCode = huc.getResponseCode();

if(respCode >= 400){
	broken++;
System.out.println(url+" is a broken link");
list.add(url);

}
else{
	count++;
System.out.println(url+" is a valid link");
}

} 
catch (MalformedURLException e) {
   e.printStackTrace();
} 
catch (IOException e) {

e.printStackTrace();
}
}
//System.out.println(count+" are valid links");
//System.out.println(skip+ " are Skipping links");
//System.out.println(broken+ "are Broken links");
String str1 = Integer.toString(count);
String str2 = Integer.toString(skip);
String str3 = Integer.toString(broken);

String[] array = null;
array = list.toArray(new String[list.size()]);
int size = list.size();
for(int i=0;i<size;i++){
     System.out.println(array[i]);
}

//System.out.println("The Total Valid links = " + str1 ,"The Skipping links = " + str2, "The Skipping links = " + str2);
System.out.printf("The Total Valid links: %s\nThe Skipping links: %s\nThe Broken links: %s\nThese are the Broken links: %s",str1, str2,str3,list);
//System.out.println("The Total Valid links:" + str1 +
//		           "The Skipping links = " + str2  + 
//		           "The Broken links:"+str3);
//System.out.println("Broken links"+url);
//System.out.println("The Total Valid links " + str1 + "The Skipping links: "+ str2 +"The Broken links:"+str3);
//System.out.println("The Skipping links = " + str2);
//System.out.println("The Skipping links = " + str2);
//System.out.println(list+"These are the Broken links");



driver.quit();

}
}
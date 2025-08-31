## WELCOME TO EMERGENCY HOTLINE 


### Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
2. How do you **create and insert a new element into the DOM**?
3. What is **Event Bubbling** and how does it work?
4. What is **Event Delegation** in JavaScript? Why is it useful?
5. What is the difference between **preventDefault() and stopPropagation()** methods?

## Answer the question no. 1

1. **getElementById,** হলো কোন element কে তার I'd দিয়ে ধরা বা সিলেক্ট করা । এবং **getElementById**
    দিয়ে শুধু একটা element ই পাওয়া যায়। 
2. **getElementsByClassName,**  নির্দিষ্ট class name এর সবগুলো element কে ধরা বা সিলেক্ট করা‌। 
   এবং **getElementsByClassName**    দিয়ে পুরো একটা html collection পাওয়া যায়|যা array এর মতো কিন্তু array না।
3. **querySelector** হলো কোন element কে css selector দিয়ে ধরা এবং এর থেকে একটা element ই পাওয়া যায়,
    যদি সেই css selector একাধিক element এ থাকে তাহলেও শুধু প্রথমটাই রিটার্ন করে ।
4. **querySelectorAll**  হলো কোন css selector দিয়ে সব element কে ধরা। **querySelectorAll** থেকে Node list পাওয়া যায়,
   যা array এর মতো কিন্তু array না।

   ## Answer the question no. 2

 - তৈরি করবো **document.createElement("tag name")** এবং insert করার জন্য প্রথমে new element কে একটা variable এ রেখে দিবো, 
  এবং যেটাতে যোগ করবো সেটা দিয়ে appendchild () করবো| যেমন cardContainer.appendchild(new element রাখা variable) ,
  Dom এ new element যোগ/insert করার জন্য আরো কিছু মেথড আছে যেমন append(),prepend() , insertBefor() 
  এবং text যোগ করবো= প্রথমে তৈরি করে যে variable রাখছি সেটা.innerText 

  ## Answer the question no. 3
    
 - **Event Bubbling** হলো DOM এর মধ্যে event এর একটা প্রতিক্রিয়া যা নিচ (child element) থেকে উপরের দিকে উঠে child element এর parent এবং তারপর parentএর parent এভাবে document পর্যন্ত।
 যখন কোন child element এ কোন event ঘটে তখন সেই event প্রথমে সেই element এর মধ্যে, তারপর তার parent element এর মধ্যে, তারপর parent এর parent element এর মধ্যে কাজ করে, যদি তাকে মাঝখানে stop করা না হয়।


 ## Answer the question no. 4

 - **Event Delegation** হলো parent element এ event listener বসিয়ে সেই event এর মাধ্যমে child element গুলোর মধ্যে event handle করা।
 এ ক্ষেত্রে প্রতিটি child element -এ আলাদা আলাদা event বসানোর দরকার নেই।


 ## Answer the question no. 5

- **preventDefault()** browser এর default action বন্ধ করে।
   **stopPropagation()** event এর bubble/capture বন্ধ করে ।



<h1 align="center">WFYB</h1>
<p align="center">
📔<a href="https://github.com/Faris-abukhader/WFYB-backend/blob/master/README.md"> English </a>📔 
</p>
<p align="center">فرونت اند سيكون متاح قريبا … </p>


## 🚩 قائمة المحتويات 


- [المقدمة](#--المقدمة)
- [تحميل المستودع](#--تحميل-المستودع)
- [تهيئة المشروع](#--تهيئة-المشروع)
- [بنية مجلد المشروع](#--بنية-مجلد-المشروع)
- [الخصائص](#--الخصائص)
- [المكتبات](#-المكتبات)
- [الرخصة](#-الرخصة)




## <img src="https://cdn-icons-png.flaticon.com/512/1436/1436664.png" width="25" height="25" style="padding-right:15px">  المقدمة 

<p dir="rtl">

 "نحن نمول مشروعك" WFYB هي منصة تتيح لرواد الأعمال الفرصة للحصول على تمويل و دعم لمشاريعهم ، وذلك فقط عن طريق التسجيل في المنصة ، ثم نشر مشروعهم ، وانتظار اقبال الممولين للمشروع .

هذا المشروع يتكون من جزئين هنا الفرونت اند (واجهة المستخدم) ، والباك اند (الخلفية او السيرفر) وهو الجزء الذي تقرأه الان . 

هذا ال API (واجهة برمجة التطبيقات) يتكون من 6 مسارات مختلفة ، سأحاول أن اشرح هذا المسارات بشكل بسيطة وعلى عجالة . 

المستخدم (user): 
هذا المسار يحوي على 5 مسارات فرعية ، اثنان ل post لتسجيل الدخول او لانشاء حساب جديد ، مسار للتأكيد الحساب ، ومسار لاعادة ارسال طلب التأكيد ، والمسار الأخير لتعديل بعض صفات المستخدم .

رائد الأعمال (starter): 
هذا المسار يحتوي على مسار فرعي واحد وهو مسار التعدين (put) والذي هو مسؤول عن تعديل صفات رائد الأعمال ، هذا المسار يقوم بتعديل نبذة عن صاحب الحساب ، يمكنك لاحقاً اضافة صفات اخره لصاحب او لرائد العمل .


المشروع (project):
هنا يوجد 6 مسارات فرعية ، ثلاث منها للانشاء (post) ، للتعديل (put) ، للحذف (delete) ، إلى جانب ذلك هنا ثلاث مسارات اخذ (get) ، الاول الجميع (all) ويعطي جميع المشاريع المتاحة في دائرة البيانات ، الثاني خاص برائد الاعمال (starter) ويعطي جميع المشاريع لرائد اعمال واحد ، والاخير البحث (search) حيث يعطي نتائج البحث عن المشروع باسمه . 


العهود (pledge):
في هذا المسار هناك مسار فرعي واحد وهو للانشاء (post) وهو متاح للمستثمرين فقط.

التعليقات(comment):
تحت هذا المسار هناك ثلاث مسارات وهي الانشاء (post) ، التعديل (put) ، الحذف (delete) ، هنا يجب التنويه ان هذا المسار متاح فقط للمستثمرين الذين قد استثمروا في المشروع الهدف . 

الردود(reply):
هذا المسار مشابه جداً للمسار السابق (التعليقات) ولكن الأختلاف هنا انه متاح فقط لصاحب المشروع فقط للرد على التعليقات للمشروع الخاص به. 
</p>


## <img src="https://cdn-icons-png.flaticon.com/512/814/814848.png" width="25" height="25" style="padding-right:15px">  تحميل المستودع  


### 🔘 نسخ مستودع المشروع 
1. اذهب الى الصفحة الرئسية للمشروع .
2. في اعلى الصفحة انقر على الزر "code".
3. انسخ رابط المستودع .
4. افتح خط الاوامر terminal على الجهاز الخاص بك.
5. انتقل على المكان المراد تحميل المشروع اليه .
6. ادخل الامر التالي لنسخ مستودع المشروع لجهاز الحاسب الخاص بك:
```
git clone github.com/Faris-abukhader/WFYB-backend
```
انقر على الزر enter لاتمام العملية 
```
git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
> Cloning into `WFYB-backend`...
> remote: Counting objects: 10, done.
> remote: Compressing objects: 100% (8/8), done.
> remove: Total 10 (delta 1), reused 10 (delta 1)
> Unpacking objects: 100% (10/10), done.
```
<br/>


## <img src="https://cdn-icons-png.flaticon.com/512/814/814848.png" width="25" height="25" style="padding-right:15px">  تهيئة المشروع 

لتهيئة المشروع لابد من تحميل NodeJs على جهاز الخاص ، اما اذا كنت تمتلكه بالفعل فتأكد تحميل اخر اصدار.
### 🔘 التأكد من اصدار NodeJs
```
node -v
```

### 🔘 تحميل NodeJs


> لاجهزة وندوز
- يمكن تحميل نسخة ويندوز عبر الصفحة الرسمية ل NodeJs ، يرجى التأكد من تحميل آخر اصدار متاح .
 [الصفحة الرسمية](https://nodejs.org/en/download/)

<br/>

> لاجهزة الماك 
- يمكن تحميل NodeJs عبر اوامر brew 
```
brew install node
```
- يمكنك تحميل نسخة الماك عن طريق  ل NodeJs  [الصفحة الرسمية  ](https://nodejs.org/en/download/)
<br/>
<hr/>


### 🔘 تحميل المكتبات اللازمة 

من خلال شريط الاوامر terminal انتقل الى مكان تواجد الملف package.json ثم ادخل الامر التالي  :
```
npm install 
```
الان عليك عمل قاعد بيانات جديد sql ، بعد قيامك بذلك انشىء ملف جديد في المشروع باسم .gitignore واكتب بداخله :
```
# Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB and CockroachDB.
# See the documentation for all the connection string options: https://pris.ly/d/connection-strings

DATABASE_URL="mysql://<USERNAME>:<YOUR_PASSWORD>@localhost:3306/<DB_NAME>?schema=public"

```
الان نحتاج الى تهيئة مكتبة Prisma ادخل الامر التالي :
```
cd prisma 
prisma migrate dev
```

لتشغيل المشروع ادخل الامر التالي : 
```
npm run dev
```

<br/>
<hr/>


## <img src="https://cdn-icons-png.flaticon.com/512/535/535471.png" width="25" height="25" style="padding-right:15px">  بنية مجلد المشروع   

```
📦WFYB-backend 
 ┣ 📂auth
 ┃ ┣ 📜authController.js
 ┃ ┣ 📜authRoute.js
 ┃ ┗ 📜authSchema.js
 ┣ 📂comment
 ┃ ┣ 📜commentController.js
 ┃ ┣ 📜commentRoute.js
 ┃ ┗ 📜commentSchema.js 
 ┣ 📂pledge
 ┃ ┣ 📜pledgeController.js
 ┃ ┣ 📜pledgeRoute.js
 ┃ ┗ 📜pledgeSchema.js
 ┣ 📂preValidation
 ┃ ┣ 📜backerMiddleware.js
 ┃ ┣ 📜starterMiddleware.js
 ┃ ┣ 📜userMiddleware.js
 ┃ ┗ 📜websiteMiddleware.js
 ┣ 📂prisma
 ┃ ┗ 📜schema.prisma
 ┣ 📂project
 ┃ ┣ 📜projectController.js
 ┃ ┣ 📜projectRoute.js
 ┃ ┗ 📜projectSchema.js
 ┣ 📂reply
 ┃ ┣ 📜replyController.js
 ┃ ┣ 📜replyRoute.js
 ┃ ┗ 📜replySchema.js
 ┣ 📂starter
 ┃ ┣ 📜starterController.js
 ┃ ┣ 📜starterRoute.js
 ┃ ┗ 📜starterSchema.js
 ┣ 📂util
 ┃ ┣ 📂emailConfig
 ┃ ┃ ┣ 📂templates
 ┃ ┃ ┃ ┣ 📜resetPassword.html
 ┃ ┃ ┃ ┗ 📜verify.html
 ┃ ┃ ┣ 📜emailConfig.js
 ┃ ┃ ┣ 📜script.js
 ┃ ┃ ┗ 📜sendInBlue.js
 ┃ ┣ 📜docGeneratorOptions.js
 ┃ ┣ 📜paginationRange.js
 ┃ ┗ 📜schemaContainer.js
 ┣ 📜.env
 ┣ 📜.gitignore
 ┣ 📜app.js
 ┣ 📜package-lock.json
 ┗ 📜package.json
```


## <img src="https://cdn-icons-png.flaticon.com/512/535/535471.png" width="25" height="25" style="padding-right:15px">  الخصائص  

- صفحة ويب  توثق محتويات ال API  يمكن زيارة عن طريق الرابط التالي :
```
http://localhost:4500/doc
```
- المصادقة authentication و التفويض authorization لعد طبقات ، للمزيد انظر لمحتويات المجلد prevalidation  .
- جميع معلومات المستخدم الحساسة يتم تشفيرها قبل حفظها في قاعدة البيانات .
- نظام خاص بتأكيد الحساب بواسطة الايميل  



## 📦 المكتبات


  | اسم المكتبة  | الوصف |
| --- | --- |
| [`@fastify/cors`](https://github.com/fastify/fastify-cors) | Fastify CORS |
| [`@fastify/static`](https://github.com/fastify/fastify-static) | Plugin for serving static files as fast as possible |
| [`@fastify/swagger`](https://github.com/fastify/fastify-swagger) | Swagger-compliant APIs entirely in Node.js |
| [`@prisma/client`](https://github.com/prisma/prisma) | Next-generation ORM for Node.js & TypeScript | PostgreSQL, MySQL server |
| [`prisma`](https://github.com/prisma/prisma) | Next-generation ORM for Node.js & TypeScript | PostgreSQL, MySQL server |
| [`bcrypt`](https://www.npmjs.com/package/bcrypt) | A library to help you hash passwords |
| [`fastify`](https://github.com/fastify/fastify) | Fast and low overhead web framework, for Node.js |
| [`handlebars`](https://www.npmjs.com/package/handlebars) | A Handlebars view engine for Express which doesn't suck |
| [`jsonwebtoken`](https://www.npmjs.com/package/jsonwebtoken) | JSON Web Token implementation (symmetric and asymmetric) |
| [`nodemailer`](https://github.com/nodemailer/nodemailer) | Easy as cake e-mail sending from your Node.js applications |
| [`nodemon`](https://github.com/remy/nodemon) | Simple monitor script for use during development of a Node.js app |
| [`sib-api-v3-sdk`](https://www.npmjs.com/package/sib-api-v3-sdk) | SendinBlue's API v3 Node.js Library |


## 📜 الرخصة

هذا المشروع تحت رخصة [MIT](https://github.com/Faris-abukhader/WFYB-backend/blob/master/license) © [FaRiS](https://github.com/Faris-abukhader).

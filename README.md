<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8" />
  <title>حساب المعدل العام للباكالوريا</title>
  <style>
    body {
      font-family: 'Tahoma', sans-serif;
      background-color: #f9f9f9;
      color: #333;
      padding: 2rem;
      line-height: 1.7;
    }
    h1, h2, h3 {
      color: #0e7490;
    }
    code, pre {
      background-color: #eee;
      padding: 0.5rem;
      display: block;
      direction: ltr;
      overflow-x: auto;
    }
    ul {
      list-style: square;
      padding-right: 1.2rem;
    }
    .box {
      background: #fff;
      border: 1px solid #ccc;
      padding: 1rem;
      border-radius: 0.5rem;
      box-shadow: 0 2px 4px rgba(0,0,0,0.05);
      margin-bottom: 2rem;
    }
  </style>
</head>
<body>

  <h1>🧮 تطبيق حساب المعدل العام للباكالوريا</h1>

  <div class="box">
    <p>
      هذا التطبيق يساعد التلاميذ المغاربة على حساب <strong>معدل الامتحان الوطني</strong> و <strong>المعدل العام للباكالوريا</strong> بسهولة، حسب الشعبة والمعاملات الخاصة بكل مادة.
    </p>
  </div>

  <h2>💡 المميزات</h2>
  <ul>
    <li>حساب معدل الامتحان الوطني بناءً على المعاملات الرسمية.</li>
    <li>دعم جميع الشعب: SPC, SVT, SMA, SMB, SAGRO, SE, SGC, LT, SH.</li>
    <li>حساب المعدل العام باعتماد الدورة 1 + الدورة 2 + الجهوي + الوطني.</li>
  </ul>

  <h2>🧱 التقنيات المستعملة</h2>
  <ul>
    <li>React.js</li>
    <li>TailwindCSS</li>
    <li>Hooks (useState)</li>
  </ul>

  <h2>📦 طريقة الاستخدام</h2>
  <ol>
    <li>اختر الشعبة من القائمة المنسدلة.</li>
    <li>أدخل النقط الخاصة بالمواد المطلوبة.</li>
    <li>اضغط على زر <strong>احسب النتيجة</strong>.</li>
    <li>ستظهر النتيجة النهائية في الأسفل.</li>
  </ol>

  <h2>✅ شروط الإدخال</h2>
  <ul>
    <li>يجب أن تكون جميع النقاط بين <code>0</code> و <code>20</code>.</li>
    <li>إذا تم إدخال قيمة خاطئة، تظهر رسالة خطأ للتنبيه.</li>
  </ul>

  <h2>📁 هيكل المشروع</h2>
  <pre>
src/
├── components/
│   ├── National.jsx
│   ├── MoyenneBac.jsx
│   └── branchesNational/
│       ├── SPC.jsx
│       ├── SMA.jsx
│       └── ...
├── App.jsx
└── main.jsx
  </pre>

  <h2>🙋‍♂️ المطور</h2>
  <p>
    تم تطوير هذا المشروع لمساعدة التلاميذ المغاربة على حساب معدلاتهم بشكل دقيق ومنظم. مرحباً بجميع الاقتراحات أو المساهمات على GitHub.
  </p>

</body>
</html>

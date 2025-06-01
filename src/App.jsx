import { Calculate, MenuBook, School } from '@mui/icons-material';
import { useState } from 'react';
import National from './components/National';
import Regional from './components/Regional';
import Card from './components/Card';
import MoyenneBac from './components/MoyenneBac';

const App = () => {
  const [noteView, setNoteView] = useState(null);

  const handleBack = () => setNoteView(null);

  if (noteView === null) {
    return (
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 min-h-screen text-white flex flex-col items-center justify-center px-6 py-12">
        <h1 className="text-4xl font-extrabold text-cyan-400 mb-10 drop-shadow-lg text-center">
          حساب نقاط الباكالوريا
        </h1>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl w-full">
          <Card
            title="الامتحان الجهوي"
            para="حساب معدل الامتحان الجهوي"
            icon={<MenuBook fontSize="inherit" className="text-cyan-400" />}
            changeView={() => setNoteView('Regio')}
            className="hover:scale-105 transition-transform duration-300"
          />
          <Card
            title="الامتحان الوطني"
            para="حساب معدل الامتحان الوطني"
            icon={<School fontSize="inherit" className="text-cyan-400" />}
            changeView={() => setNoteView('Natio')}
            className="hover:scale-105 transition-transform duration-300"
          />
          <Card
            title="المعدل العام للباكالوريا"
            para="حساب المعدل العام للباكالوريا"
            icon={<Calculate fontSize="inherit" className="text-cyan-400" />}
            changeView={() => setNoteView('Bac')}
            className="hover:scale-105 transition-transform duration-300"
          />
        </div>

        <p className="text-center mt-8 text-slate-400 text-xl select-none">
          كل الحقوق محفوظة &copy;{' '}
          <a
            href="https://ourouidev.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-500 font-semibold hover:underline"
          >
            ourouimed
          </a>{' '}
          {new Date().getFullYear()}
        </p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 min-h-screen text-white flex flex-col items-center justify-center px-4 py-10">
      <div className="w-full max-w-md bg-slate-900 rounded-lg shadow-lg p-8 border border-cyan-600">
        {noteView === 'Regio' && <Regional />}
        {noteView === 'Natio' && <National />}
        {noteView === 'Bac' && <MoyenneBac />}
      </div>

      <button
        className="cursor-pointer mt-8 px-6 py-3 bg-cyan-600 hover:bg-cyan-700 active:bg-cyan-800 rounded-lg font-semibold shadow-md transition-colors duration-300"
        onClick={handleBack}
        aria-label="العودة إلى الصفحة الرئيسية"
      >
        العودة
      </button>

      <p className="text-center mt-8 text-slate-400 text-xl select-none">
          كل الحقوق محفوظة &copy;{' '}
          <a
            href="https://ourouidev.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-500 font-semibold hover:underline"
          >
            ourouimed
          </a>{' '}
          {new Date().getFullYear()}
        </p>
    </div>
  );
};

export default App;

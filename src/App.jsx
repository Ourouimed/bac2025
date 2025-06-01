import { Calculate, MenuBook, School } from '@mui/icons-material';
import { useState } from 'react';
import National from './components/National';
import Regional from './components/Regional';
import Card from './components/Card';
import MoyenneBac from './components/MoyenneBac';

const App = () => {
  const [noteView, setNoteView] = useState(null)

  const handleBack = () => setNoteView(null);

  if (noteView === null) {
    return (
      <div className="bg-slate-950/90 min-h-screen text-white flex items-center justify-center px-4">
        <div className="w-[800px] max-w-full py-8">
          <h1 className="text-3xl font-bold text-cyan-400 mb-8 text-center">
            حساب نقاط الباكالوريا
          </h1>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            <Card
              title="الامتحان الجهوي"
              para="حساب معدل الامتحان الجهوي"
              icon={<MenuBook fontSize="inherit" />}
              changeView={() => setNoteView('Regio')}
            />
            <Card
              title="الامتحان الوطني"
              para="حساب معدل الامتحان الوطني"
              icon={<School fontSize="inherit" />}
              changeView={() => setNoteView('Natio')}
            />
            <Card
              title="المعدل العام للباكالوريا"
              para="حساب المعدل العام للباكالوريا"
              icon={<Calculate fontSize="inherit" />}
              changeView={() => setNoteView('Bac')}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-950/90 min-h-screen text-white flex flex-col items-center justify-center px-4">
     

      <div className="w-[400px] max-w-full py-8 px-5 bg-slate-900 rounded shadow">
        {noteView === 'Regio' && <Regional/>}
        {noteView === 'Natio' && <National/>}
        {noteView === 'Bac' && <MoyenneBac/>}
      </div>

      <button
        className="mt-6 px-4 py-2 bg-cyan-500 rounded hover:bg-cyan-600 transition duration-300 cursor-pointer"
        onClick={handleBack}
      >
        العودة
      </button>
    </div>
  );
};

export default App;

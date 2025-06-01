import { useState } from "react";

const MoyenneBac = () => {
  const [notes, setNotes] = useState({
    S1: '',
    S2: '',
    national: '',
    regional: '',
  });
  const [finalNote, setFinalNote] = useState(null);
  const [error, setError] = useState("");

  const handleCalculateNotes = () => {
    const { S1, S2, regional, national } = notes;

    const s1 = parseFloat(S1);
    const s2 = parseFloat(S2);
    const reg = parseFloat(regional);
    const nat = parseFloat(national);

    if ([s1, s2, reg, nat].some(val => isNaN(val) || val < 0 || val > 20)) {
      setError("المرجو التأكد من أن جميع القيم بين 0 و 20");
      setFinalNote(null);
      return;
    }

    setError(""); 

    const controle = (s1 + s2) / 2;
    const moyenne = (controle * 0.25) + (reg * 0.25) + (nat * 0.5);
    setFinalNote(moyenne.toFixed(2));
  };

  return (
    <div className="text-white">
      <h3 className="text-cyan-500 font-bold text-2xl text-center mb-2">
        المعدل العام للباكالوريا
      </h3>

      <div>
        <div className="md:flex items-center gap-2 mb-2">
          <div className="flex-1">
            <label className="label">الدورة الأولى</label>
            <input
              type="number"
              min={0}
              max={20}
              value={notes.S1}
              onChange={(e) => setNotes({ ...notes, S1: e.target.value })}
              className="input-select"
              placeholder="الدورة الأولى"
            />
          </div>
          <div className="flex-1">
            <label className="label">الدورة الثانية</label>
            <input
              type="number"
              min={0}
              max={20}
              value={notes.S2}
              onChange={(e) => setNotes({ ...notes, S2: e.target.value })}
              className="input-select"
              placeholder="الدورة الثانية"
            />
          </div>
        </div>

        <div className="md:flex items-center gap-2 mb-2">
          <div className="flex-1">
            <label className="label">الأمتحان الجهوي</label>
            <input
              type="number"
              min={0}
              max={20}
              value={notes.regional}
              onChange={(e) => setNotes({ ...notes, regional: e.target.value })}
              className="input-select"
              placeholder="الأمتحان الجهوي"
            />
          </div>
          <div className="flex-1">
            <label className="label">الأمتحان الوطني</label>
            <input
              type="number"
              min={0}
              max={20}
              value={notes.national}
              onChange={(e) => setNotes({ ...notes, national: e.target.value })}
              className="input-select"
              placeholder="الأمتحان الوطني"
            />
          </div>
        </div>

        {error && (
          <p className="text-red-400 text-center mb-2 font-medium">{error}</p>
        )}

          <button
            className="w-full cursor-pointer mt-2 px-6 py-3 bg-cyan-600 hover:bg-cyan-700 active:bg-cyan-800 rounded-lg font-semibold shadow-md transition-colors duration-300"
            onClick={handleCalculateNotes}
          >
            احسب النتيجة
          </button>
        {finalNote !== null && (
          <div className="text-center bg-slate-800 border border-cyan-500 p-4 rounded-lg mt-4 text-2xl font-bold text-cyan-300 shadow-inner">
            النتيجة: {finalNote}/20
          </div>
        )}
      </div>
    </div>
  );
};

export default MoyenneBac;

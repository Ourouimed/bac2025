import { useState } from "react";
import SXM from "./regional/SXM";
import SEG from "./regional/SEG";
import SLH from "./regional/SLH";
import ST from "./regional/ST";
const Regional = () => {
  const [branche, setBranche] = useState(null);
  const [notes, setNotes] = useState([]);
  const [finalNote , setFinalNote] = useState(null)
  const [error, setError] = useState("");

  const handleCalculateNotes = () => {
    const invalidNote = notes.find(
      (note) => {
        const value = parseFloat(note.note);
        return isNaN(value) || value < 0 || value > 20;
      }
    );
  
    if (invalidNote) {
      setError("المرجو التأكد من أن جميع القيم بين 0 و 20");
      setFinalNote(null);
      return;
    }
  
    const total = notes.reduce(
      (acc, note) => {
        const value = parseFloat(note.note);
        acc.totalNotes += value * note.coff;
        acc.totalCoff += note.coff;
        return acc;
      },
      { totalNotes: 0, totalCoff: 0 }
    );
  
    setFinalNote(
      total.totalCoff > 0 ? (total.totalNotes / total.totalCoff).toFixed(2) : "0.00"
    );
  };

  const handlSelectBranche = (e) => {
    setBranche(e.target.value);
    setFinalNote(null)
    setError(null);
  };
  
  
  return (
    <div className="text-white">
      <h3 className="text-cyan-500 font-bold text-2xl text-center">
        حساب الامتحان الجهوي
      </h3>

      <div>
        <label className="block mb-2 text-sm font-medium text-slate-300">
          الشعبة
        </label>
        <select
          className="input-select mb-4"
          onChange={handlSelectBranche}
        >
          <option value="">-- اختر الشعبة --</option>
          <option value="sxm">العلوم التجريبية و الرياضية</option>
          <option value="seg">العلوم الاقتصادية و التدبير</option>
          <option value="slh">الأداب و العلوم الأنسانية</option>
          <option value="st">العلوم و التكنولجيات</option>
        </select>

        {branche === "sxm" && <SXM setNotes={setNotes} />}
        {branche === "seg" && <SEG setNotes={setNotes} />}
        {branche === "slh" && <SLH setNotes={setNotes} />}
        {branche === "st" && <ST setNotes={setNotes} />}
        
        


        {error && (
          <p className="text-red-400 text-center mb-4 font-medium">{error}</p>
        )}
        {branche !== null && (
          <button
            className="w-full cursor-pointer mt-2 px-6 py-3 bg-cyan-600 hover:bg-cyan-700 active:bg-cyan-800 rounded-lg font-semibold shadow-md transition-colors duration-300"
            onClick={handleCalculateNotes}
          >
            احسب النتيجة
          </button>
          
        )}
        {finalNote !== null && (
            <div className="text-center bg-slate-800 border border-cyan-500 p-4 rounded-lg mt-4 text-2xl font-bold text-cyan-300 shadow-inner">
            النتيجة: {finalNote}/20
          </div>
          )}
      </div>
    </div>
  );
};

export default Regional;

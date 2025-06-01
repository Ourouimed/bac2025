import { useState } from "react";
import SPC from "./national/SPC";
import SSVT from "./national/SSVT";
import SAGRO from "./national/SAGRO";
import SMA from "./national/SMA";
import SMB from "./national/SMB";
import SE from "./national/SE";
import SGC from "./national/SGC";
import LT from "./national/LT";
import SH from "./national/SH";
import ST from "./national/ST";
const National = () => {
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
        حساب الامتحان الوطني
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
          <option value="spc">العلوم الفيزيائية (SPC)</option>
          <option value="svt">علوم الحياة والأرض (SVT)</option>
          <option value="sagro">العلوم الزراعية (SAGro)</option>
          <option value="sma"> علوم رياضية أ (SMA)</option>
          <option value="smb">علوم رياضية ب (SMB)</option>
          <option value="se">العلوم الاقتصادية</option>
          <option value="sgc">علوم التدبير المحاسباتي</option>
          <option value="lt"> الآداب</option>
          <option value="sh"> العلوم الأنسانية</option>
          <option value="st"> العلوم و التكنولجيات</option>
        </select>

        {branche === "spc" && <SPC setNotes={setNotes} />}
        {branche === "svt" && <SSVT setNotes={setNotes} />}
        {branche === "sagro" && <SAGRO setNotes={setNotes} />}
        {branche === "sma" && <SMA setNotes={setNotes} />}
        {branche === "smb" && <SMB setNotes={setNotes} />}
        {branche === "se" && <SE setNotes={setNotes} />}
        {branche === "sgc" && <SGC setNotes={setNotes} />}
        {branche === "lt" && <LT setNotes={setNotes} />}
        {branche === "sh" && <SH setNotes={setNotes} />}
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

export default National;

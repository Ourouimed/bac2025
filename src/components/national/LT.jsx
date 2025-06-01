import { useEffect, useState } from "react";

const LT = ({ setNotes }) => {
  const [localNotes, setLocalNotes] = useState([
    { module: 'AR', note: '', coff: 4 },
    { module: 'HG', note: '', coff: 3 },
    { module: 'LANG2', note: '', coff: 4 },
    { module: 'PH', note: '', coff: 3 },
    
  ]);

  useEffect(() => {
    setNotes(localNotes);
  }, [localNotes, setNotes]);

  const handleChange = (index, value) => {
    const updated = [...localNotes];
    updated[index].note = value;
    setLocalNotes(updated);
  };

  return (
    <div>
      <div className="flex items-center gap-2 mb-4">
        <div className="flex-1">
          <label className="label">اللغة العربية </label>
          <input
            type="number"
            min={0}
            max={20}
            value={localNotes[0].note}
            onChange={(e) => handleChange(0, e.target.value)}
            className="input-select"
            placeholder="اللغة العربية"
          />
        </div>
        <div className="flex-1">
          <label className="label">التاريخ و الجغرافيا</label>
          <input
            type="number"
            min={0}
            max={20}
            value={localNotes[1].note}
            onChange={(e) => handleChange(1, e.target.value)}
            className="input-select"
            placeholder="التاريخ و الجغرافيا"
          />
        </div>
      </div>


      <div className="flex items-center gap-2 mb-4">
        <div className="flex-1">
          <label className="label">اللغة الأجنبية الثانية</label>
          <input
            type="number"
            min={0}
            max={20}
            value={localNotes[2].note}
            onChange={(e) => handleChange(2, e.target.value)}
            className="input-select"
            placeholder="اللغة الأجنبية الثانية"
          />
        </div>
        <div className="flex-1">
          <label className="label">الفلسفة</label>
          <input
            type="number"
            min={0}
            max={20}
            value={localNotes[3].note}
            onChange={(e) => handleChange(3, e.target.value)}
            className="input-select"
            placeholder="الفلسفة"
          />
        </div>
      </div>
    </div>
  );
};

export default LT;

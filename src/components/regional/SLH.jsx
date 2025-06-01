import { useEffect, useState } from "react";

const SLH = ({ setNotes }) => {
  const [localNotes, setLocalNotes] = useState([
    { module: 'LANG1', note: '', coff: 4 },
    { module: 'MATH', note: '', coff: 1 },
    { module: 'EI', note: '', coff: 2 },
    
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
        <div className="mb-2">
          <label className="label">اللغة الاجنبية الاولى</label>
          <input
            type="number"
            min={0}
            max={20}
            value={localNotes[0].note}
            onChange={(e) => handleChange(0, e.target.value)}
            className="input-select"
            placeholder="اللغة الاجنبية الاولى"
          />
        </div>

        <div className="md:flex items-center gap-2 mb-2">

        
        <div className="flex-1">
          <label className="label">الرياضيات</label>
          <input
            type="number"
            min={0}
            max={20}
            value={localNotes[1].note}
            onChange={(e) => handleChange(1, e.target.value)}
            className="input-select"
            placeholder="الرياضيات"
          />
        </div>

        <div className="flex-1">
          <label className="label">التربية الاسلامية</label>
          <input
            type="number"
            min={0}
            max={20}
            value={localNotes[2].note}
            onChange={(e) => handleChange(2, e.target.value)}
            className="input-select"
            placeholder="التربية الاسلامية"
          />
        </div>
        </div>
    </div>
  );
};

export default SLH;

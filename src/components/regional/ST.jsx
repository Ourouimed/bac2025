import { useEffect, useState } from "react";

const ST = ({ setNotes }) => {
  const [localNotes, setLocalNotes] = useState([
    { module: 'LANG1', note: '', coff: 4 },
    { module: 'AR', note: '', coff: 2 },
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
        <div className="mb-4">
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

        <div className="flex items-center gap-2 mb-4">

        
        <div className="flex-1">
          <label className="label">اللغة العربية</label>
          <input
            type="number"
            min={0}
            max={20}
            value={localNotes[1].note}
            onChange={(e) => handleChange(1, e.target.value)}
            className="input-select"
            placeholder="اللغة العربية"
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

export default ST;

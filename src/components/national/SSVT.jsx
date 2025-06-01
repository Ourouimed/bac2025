import { useEffect, useState } from "react";

const SSVT = ({ setNotes }) => {
  const [localNotes, setLocalNotes] = useState([
    { module: 'PC', note: '', coff: 5 },
    { module: 'MATH', note: '', coff: 7 },
    { module: 'SVT', note: '', coff: 7 },
    { module: 'LANG2', note: '', coff: 2 },
    { module: 'PHILO', note: '', coff: 2 },
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
          <label className="label">الفيزياء و الكيمياء (PC)</label>
          <input
            type="number"
            min={0}
            max={20}
            value={localNotes[0].note}
            onChange={(e) => handleChange(0, e.target.value)}
            className="input-select"
            placeholder="الفيزياء و الكيمياء"
          />
        </div>
        <div className="flex-1">
          <label className="label">الرياضيات (MATH)</label>
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
      </div>

      <div className="mb-4">
        <label className="label">علوم الحياة و الارض (SVT)</label>
        <input
          type="number"
          min={0}
          max={20}
          value={localNotes[2].note}
          onChange={(e) => handleChange(2, e.target.value)}
          className="input-select"
          placeholder="علوم الحياة و الارض"
        />
      </div>

      <div className="flex items-center gap-2 mb-4">
        <div className="flex-1">
          <label className="label">اللغة الأجنبية الثانية</label>
          <input
            type="number"
            min={0}
            max={20}
            value={localNotes[3].note}
            onChange={(e) => handleChange(3, e.target.value)}
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
            value={localNotes[4].note}
            onChange={(e) => handleChange(4, e.target.value)}
            className="input-select"
            placeholder="الفلسفة"
          />
        </div>
      </div>
    </div>
  );
};

export default SSVT;

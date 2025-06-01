import React from 'react';

const Card = ({ title, para, icon, changeView }) => {
  const StyledIcon = React.cloneElement(icon, {
    className: 'text-cyan-400 group-hover:scale-110 transition-transform duration-300',
    style: { fontSize: '48px' },
  });

  return (
    <button
      className="group bg-gradient-to-br from-slate-900 to-slate-950 text-center p-6 rounded-xl shadow-lg aspect-square flex flex-col items-center justify-center space-y-4 hover:shadow-cyan-500/30 hover:-translate-y-2 transition-all duration-300 cursor-pointer"
      onClick={changeView}
    >
      {StyledIcon}
      <h3 className="text-cyan-400 font-bold text-2xl">{title}</h3>
      <p className="text-slate-300 text-sm">{para}</p>
    </button>
  );
};

export default Card;

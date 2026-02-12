const DiscoButton = ({ name = "button" }) => {
    return (
        <>
            <button className="disco-btn relative overflow-hidden px-6 py-3 rounded-lg font-bold uppercase tracking-widest text-white">
                <span className="disco-shimmer absolute inset-0"></span>
                <span className="relative text-sm ">{name}</span>
            </button>

            <style>{`
        .disco-btn {
          background: linear-gradient(45deg, #48e22d, #1b8600);
          box-shadow: 0 0 3px rgba(255, 255, 255, 0.4);
          transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275),
                      box-shadow 0.4s ease;
        }

        // .disco-btn:hover {
        //   transform: scale(1.05);
        //   box-shadow:
        //     0 2px 10px rgba(74,0,224,0.8),
        //     0 0 1px rgba(142,45,226,0.6),
        //     0 0 3px rgba(255,0,255,0.3);
        // }

        // .disco-shimmer {
        //   background:
        //     linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%),
        //     linear-gradient(-45deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%);
        //   background-size: 30px 30px;
        //   animation: discoShine 2s linear infinite;
        // }

        // .disco-btn:hover .disco-shimmer {
        //   animation-duration: 0.7s;
        // }

        // @keyframes discoShine {
        //   0% {
        //     background-position: 0 0, 0 0;
        //   }
        //   100% {
        //     background-position: 30px 30px, -30px -30px;
        //   }
        // }
      `}</style>
        </>
    );
};

export default DiscoButton;

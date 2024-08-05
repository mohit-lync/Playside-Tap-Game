

export const MessageBox = () => {
  return (
    <div className='absolute -bottom-5 left-4 z-20 flex items-center justify-center  rounded-[26.5px] p-[0.7px] h-15'
        style={{
          background:"linear-gradient(82.65deg, #FFFFFF 3.97%, #6CF8F3 98.35%)"
          // background:"red"
        }}
      >

        <div className='flex font-bold items-center justify-center h-full text-white text-[9px] py-4 px-7 rounded-[26.5px] backdrop-blur-3xl bg-msgBoxBackground'
        style={{
            boxShadow:"0px 0px 8.17459px rgba(255, 255, 255, 0.25)"
        }}
        >Elemental Bonanza! 🪄🌪️</div>
    </div>
  )
}

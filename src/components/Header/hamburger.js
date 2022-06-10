const Hamburger = ({ open, handleClick }) => {
  return (
    <>
      <div className="hamburger" open={open} onClick={handleClick}>
        <div />
        <div />
        <div />
      </div>
    </>
  )
}

export default Hamburger

export default function Redirect() {
  const openTab= () => {
    window.open('https://oncyber.io/','_blank')
  };

  return (
    <div className="container">
      <main style={{width: "100%", padding: 0}}>
        <button style={{width: "100%", height: "100%", fontSize: "72px"}} onClick={openTab}>Click me</button>
      </main>
    </div>
  )
}
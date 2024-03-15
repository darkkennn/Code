const Content = () => {
    const handClick = () => {
        console.log('You clicked the button');
    }
    const handleNameChanges = () => {
        const names = ['Sachin', 'Kevin', 'Goofballer'];
        const int = Math.floor(Math.random() * 3);
        return names[int];
      }

  return (
    <main>

        <p>
            Hello {handleNameChanges()}!
        </p>
        <button onClick = {handClick()}>Click</button>
    </main>
    )
}

export default Content
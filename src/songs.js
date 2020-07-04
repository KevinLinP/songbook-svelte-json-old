async function loadSongs() {
  try {
    const response = await fetch('/songs.json')
    const json = await response.json()
    console.log(json)
  } catch (err) {
    console.log(`Error: ${err}`)
  }

  return {}
}

export default loadSongs
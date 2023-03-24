import { FormEvent, useState } from "react"
import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"
import './Status.css'

export function Status(){
  const [newAnswer, setNewAnswer] = useState('')
  const [Answers, setAnswers] = useState([
    'Meu primeiro tweet',
    'Teste',
    'Deu certo tweetar'
  ]) 

  function createNewAnswer(event: FormEvent){
    event.preventDefault()
    setAnswers([newAnswer, ...Answers])
    setNewAnswer('')
  }

    return(
        <main className="status">
          <Header title="Tweet"/>

          <Tweet content="testando isso"/>

          <Separator/>

          <form onSubmit={createNewAnswer} className="answer-tweet-form">
            <label htmlFor="tweet">
              <img src="https://github.com/kartulle.png" alt="Karolaine" />
              <textarea id="tweet" placeholder='Tweet sua resposta' value={newAnswer} onChange={(event) => {
                setNewAnswer(event.target.value)
              }}/>
            </label>
            <button type="submit">Responder</button>
          </form>

          {Answers.map(answer =>{
            return <Tweet key={answer} content={answer}/>
          })}

        </main>
    )
}
import { Mic } from "lucide-react"
import { useState } from "react"

interface SpeechRecognitionComponentProps {
	handleSetTranscript(speech: string): void
}

const SpeechRecognitionComponent = ({
	handleSetTranscript,
}: SpeechRecognitionComponentProps) => {
	const [isListening, setIsListening] = useState(false)

	const startListening = () => {
		const recognition = new (
			window.webkitSpeechRecognition || window.SpeechRecognition
		)()
		recognition.lang = "pt-BR"

		recognition.onresult = (event) => {
			const transcript = event.results[0][0].transcript
			handleSetTranscript(transcript)
		}

		recognition.onend = () => {
			setIsListening(false)
		}

		recognition.start()
		setIsListening(true)
	}

	const stopListening = () => {
		setIsListening(false)
	}

	const handleClick = () => {
		if (!("webkitSpeechRecognition" in window)) {
			// Check for WebKit SpeechRecognition support
			alert("Este navegador não suporta reconhecimento de fala.")
		} else {
			if (!isListening) {
				navigator.mediaDevices
					.getUserMedia({ audio: true })
					.then(startListening)
					.catch((error) => {
						alert(
							"Erro ao acessar o microfone, verifique se existem as permissões necessárias",
						)
					})
			} else {
				stopListening()
			}
		}
	}

	return (
		<>
			<Mic
				className={`${isListening ? "text-green-600" : "text-gray-200"} `}
				onClick={handleClick}
			/>
		</>
	)
}

export default SpeechRecognitionComponent

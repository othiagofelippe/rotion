import { Link } from 'react-router-dom'

export function Blank() {
  return (
    <main className="flex-1 flex items-center justify-center text-rotion-400 gap-1">
      Selecione ou crie um documento{' '}
      <Link to={'/document'}>Clique para entrar no documento</Link>
    </main>
  )
}

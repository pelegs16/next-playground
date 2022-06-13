const CodeBox = ({ children }) => {
  return (
    <div className="p-4 rounded bg-amber-50 border-amber-600 border">
      <div className="font-bold py-3 text-amber-800">Fetching code</div>
      <div>
        <code>
        <pre>
          { children }
        </pre>
        </code>
      </div>
    </div>
  )
}

export default CodeBox
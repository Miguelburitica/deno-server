export function Header(props: any) {
  const navigateToChallenge = (direction: string) => {
    const currentChallengeDay = window.location.pathname.split('/')[2]
    const nextChallengeDay = direction === 'next' ? parseInt(currentChallengeDay) + 1 : parseInt(currentChallengeDay) - 1
    window.location.href = `/challenges/day_${nextChallengeDay}`
  }
  
  return (
    <header className="text-gray-900 dark:text-gray-200">
      <nav className="flex py-2 justify-between px-2 bg-slate-900 fixed w-full z-50">
        <div className="flex items-center">
          <a className="px-2" href="/">Home</a> |
          <a className="px-2 mr-5" href="/challenges/day_1">First challenge</a>
          { 
            props.isChallengePage
              ? (
                <div className={'flex gap-2'}>
                  <svg onClick={() => navigateToChallenge('prev')} className="w-6 h-6 cursor-pointer stroke-transparent fill-blue-900 hover:fill-blue-100 transition-all" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953l7.108-4.062A1.125 1.125 0 0121 8.688v8.123zM11.25 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953L9.567 7.71a1.125 1.125 0 011.683.977v8.123z" />
                  </svg>
                  <svg onClick={() => navigateToChallenge('next')} className="w-6 h-6 cursor-pointer stroke-transparent fill-blue-900 hover:fill-blue-100 transition-all" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z" />
                  </svg>
                </div>
              )
              : ''
          }
        </div>
      </nav>
    </header>
  )
}
export function Header(props: any) {
  return (
    <header class="text-gray-900 dark:text-gray-200">
      <nav class="flex py-2 justify-between px-2 bg-slate-900 fixed w-full z-50">
        <div class="flex items-center">
          <a class="px-2" href="/">Home</a> |
          <a class="px-2 mr-5" href="/challenges/day_1">First challenge</a>
          { 
            props.isChallengePage
              ? (
                <>
                  <button id="prevChallenge">
                    <svg class="w-6 h-6 mr-4 stroke-transparent fill-blue-900 hover:fill-blue-100 transition-all" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M21 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953l7.108-4.062A1.125 1.125 0 0121 8.688v8.123zM11.25 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953L9.567 7.71a1.125 1.125 0 011.683.977v8.123z" />
                    </svg>
                  </button>
            
                  <button id="nextChallenge">
                    <svg class="w-6 h-6 stroke-transparent fill-blue-900 hover:fill-blue-100 transition-all" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z" />
                    </svg>
                  </button>
                </>
              )
              : ''
          }
        </div>
      </nav>
    </header>
  )
}
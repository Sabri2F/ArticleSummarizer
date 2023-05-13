import {logo} from '../assets';

const Hero = () => {
  return (
    <header className='w-full flex justify-center
    items-center flex-col'>
        <nav className='flex justify-between items-center w-full mb-10 pt-3'>
            <img src={logo} alt='site-logo' className='w-28 object-contain'/>
        

        <button 
            type='button'
            onClick={() => window.open(
            )}
            className='black_btn'> About Us</button>
        </nav>

        <h1 className='head_text'>
            Summarize Articles with <br
            className='max-md:hidden'/>
            <span className='orange_gradient'>OpenAI GPT-4</span>
        </h1>
        <h2 className='desc'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. 
        Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. 
        Duis sagittis ipsum. Praesent mauris. 
        </h2>
    </header>
  )
}

export default Hero;
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import template from './assets/json/template.json'

const App = () => {
  const githubRepoUrl = 'https://github.com/renoangelobanderlipe/react-daisy-template';
  const issueUrl = `${githubRepoUrl}/issues`;
  return (
    <div className="flex justify-center items-center flex-col h-screen gap-6">
      <div className='w-[400px]'>
        <Lottie animationData={template} loop={true} />
      </div>
      <article className="prose">
        <h1 className="text-indigo text-center mb-4">
          Welcome to the React Material Tailwind Template
        </h1>

        <h4 className="text-gray-500 text-center max-w-prose">
          Kickstart your project with this free React template. Crafted with love using Material-Tailwind and Tailwind CSS, it provides a solid foundation for building beautiful and responsive web applications.
        </h4>
      </article>

      <div className="flex gap-4">
        <Link to={githubRepoUrl} target="_blank">
          <button className="btn bg-indigo" >
            <Icon icon="akar-icons:github-fill" width={'24px'} className="text-white" />
            <h3 className='text-white font-bold'>Explore on GitHub</h3>
          </button>
        </Link>

        <Link to={issueUrl} target="_blank">
          <button className="btn btn-error">
            <Icon icon="bi:exclamation-triangle-fill" width={'24px'} className="text-white" />
            <h3 className='text-white font-bold'>Report an Issue</h3>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default App;

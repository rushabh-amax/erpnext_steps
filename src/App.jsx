import { useState } from 'react'
import './App.css'
import { ThemeProvider } from './components/theme-provider'
import { ModeToggle } from './components/mode-toggle'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import { CopyCommand } from './components/copycommand'
import { ArrowBigUpDash, CheckLine, Feather, FeatherIcon, Panda, Terminal } from 'lucide-react'
import HeadingIcon from './components/Heading_icon'
import CopyCommand from './components/copycommand'
// import { HoverCard } from './components/ui/hover-card'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"





function App() {

const preRequesits = [
  {
    id:1,
    text:"Operating System: Linux Ubuntu 22.04 LTS"
  },
    {
    id:2,
    text:"Minimum Recommended Hardware: 2 CPU | 2 GB RAM | 10 GB Disk"
  },
    {
    id:3,
    text:"Root shell access to the server (via SSH)"
  },
]


const tableOfContent = [
  {
    id:1,
    text:"server Setup"
  },
  {
    id:2,
    text:"install required packages"
  },
  {
    id:3,
    text:"configure MySQL server"
  },
  {
    id:4,
    text:"install CURL,Node , NPM, Yarn, Vim"
  },
  {
    id:5,
    text:" Install Frappe Bench"
  },
  {
    id:6,
    text:" install ERPNext and other App"
  },
    {
    id:7,
    text:" iSetup Production Server"
  }
]

  return (
    
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">






      <div className='bg-gray-200 dark:bg-slate-800 w-fit flex items-center justify-end gap-4 fixed top-2 right-2 px-6 py-4 rounded-full'>
      <ModeToggle />
      <div className='flex items-center justify-center gap-1'>

        <a href="https://github.com/rushabh57" target='_blank' >
    <Avatar className="h-12 w-12 cursor-pointer">
      <AvatarImage src="./profile.jpg" />
      <AvatarFallback>RM</AvatarFallback>
    </Avatar>
        </a>
      </div>






      </div>

    {/* /main content here   */}
    <div className='bg-white dark:bg-black h-lvh w-full mx-auto'>


    <div aria-title="heading"  className="bg-white dark:bg-black text-black dark:text-white w-full poppins  mx-auto pt-[200px] md:w-[70%]">
     
<Alert className="my-3 dark:border-amber-900 border-yellow-300 bg-yellow-400 dark:bg-yellow-900 text-white">
  <Terminal className="h-4 w-4" />
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>
    The following steps worked for me, but they may not work in every environment. 
    If you encounter any issues, I recommend searching online or checking the project's repository for help. 
    Give these steps a try — they might solve your problem!
  </AlertDescription>
</Alert>

      <h1 className='text-7xl font-bold dark:text-white text-black'>ERPNext 2025 Linux Installation Guide</h1>
      <p className='text-black dark:text-gray-500'>Sharing steps of installing erpnext v14/15 in linux system </p>


    <div className='mt-12 '>
            <HeadingIcon icon={CheckLine} title='pRE-REQUISITES:'/>

{
  preRequesits.map((data, index) => (
    <div key={`pre-${index}`} className="mb-2">
      <strong className="mr-2">{data.id}</strong> 
      <span>{data.text}</span>
    </div>
  ))
}

<HeadingIcon icon={FeatherIcon} title="table of contents" />

{
  tableOfContent.map((data, index) => (
    <div key={`toc-${index}`} className="mb-2">
      <strong className="mr-2">{data.id}</strong> 
      <span>{data.text}</span>
    </div>
  ))
}

    </div>


<div  className="cmds mt-12">


      <CopyCommand step_name="1. server setup" command="sudo apt update && sudo apt upgrade -y                        sudo timedatectl set-timezone Your/Timezone"  below_text="During Installation of packages you see[y/n] hit " />

      <CopyCommand step_name="2. INSTALL REQUIRED PACKAGES" 
      sub_step_name="2.1 Install GIT" command="sudo apt-get install git"  below_text="Check if GIT is correctly installed by running git --version" />


      <CopyCommand sub_step_name="2.2 Install Python" command="sudo apt-get install git"  below_text="Check if GIT is correctly installed by running python --version" />


      <CopyCommand sub_step_name="2.3 IInstall virtualenv (if not installed)" command="pip install virtualenv"  below_text="Install virtualenv (if not installed)" />

      <CopyCommand sub_step_name="2.3.1 Check if already have Virtual Environment" command="pip install virtualenv"  below_text=" use this cmd to check: virtualenv --version" />

      <CopyCommand sub_step_name="2.3.2 Create a virtual environment" command="cd ~/frappe-bench-15.33 virtualenv env"  below_text="Install virtualenv (if not installed) use this cmd to check: virtualenv --version" />  
      
      <CopyCommand sub_step_name="2.3.3 Activate a virtual environment" command="source env/bin/activate"  below_text="you can see like: (env-name) user@hostname:~/your-frappe-bench-15.33$ , if yes, then you'r good to go" />
    
      <CopyCommand sub_step_name="2.4 Install Software Properties Common " command="sudo apt-get install software-properties-common"  below_text="for repository management" />
            
      <CopyCommand sub_step_name="2.5  Install MariaDB for sql server" command="sudo apt install mariadb-server mariadb-client"  below_text="Check if MariaDB is correctly installed by running mariadb --version" />

      <CopyCommand sub_step_name="2.6 Install Redis Server" command="sudo apt-get install redis-server"  below_text="" />
      <CopyCommand sub_step_name="2.7 Install other necessary packages (for fonts, PDFs, etc)" command="sudo apt-get install xvfb libfontconfig wkhtmltopdf
sudo apt-get install libmysqlclient-dev"  below_text="" />

      {/* <p className=''> <storng>y</storng> to continue</p> */}

      <CopyCommand step_name="3. CONFIGURE MYSQL SERVER" 
      sub_step_name="3.1 Setup the server" command="sudo mysql_secure_installation"  below_text="During the setup process, the server will prompt you with a few questions as given below. Follow the instructions to continue the setup" />

      <ul className='text-md p-4 border rounded-lg mb-6 bg-white dark:bg-gray-900 shadow-sm' >
        <HeadingIcon className=""  icon={ArrowBigUpDash} title='upper cmd process' />
        <li className='mt-4 py-2'>
        Enter current password for root: (Try to Enter your SSH root user password / your system password)
        </li>
        <li className='py-2'>
Switch to unix_socket authentication [Y/n]: <strong className='text-green-400'> Y </strong>
        </li>
        <li className='py-2'>
Change the root password? [Y/n]: <strong className='text-green-400'> Y </strong>
<span className='block text-xs'>It will ask you to set new MySQL root password at this step. This can be different from the SSH root user password.</span>
        </li>
        <li className='py-2'>
Remove anonymous users? [Y/n] <strong className='text-green-400'> Y </strong>
        </li>
        <li className='py-2'>
Disallow root login remotely? [Y/n]: <strong className='text-red-400'> N </strong>
<span className='block text-xs'>This is set as N because we might want to access the database from a remote server for using business analytics software like Metabase / PowerBI / Tableau, etc.</span>
        </li>
        <li className='py-2'>
Remove test database and access to it? [Y/n]: <strong className='text-green-400'> Y </strong>
        </li>

        <li className='py-2'>
Reload privilege tables now? [Y/n]:  <strong className='text-green-400'> Y </strong>
        </li>
      </ul>

      <CopyCommand
      sub_step_name="3.2 install vim" command="sudo apt install vim"  below_text="check if already exits in your system vim --version" />

      <CopyCommand
      sub_step_name="3.3 install vim" command="sudo vim /etc/mysql/my.cnf"  below_text="its opne a file in terminal in that paste below code " />

<CopyCommand
  sub_step_name="3.3 install vim"
  command={`[mysqld]
character-set-client-handshake = FALSE
character-set-server = utf8mb4
collation-server = utf8mb4_unicode_ci

[mysql]
default-character-set = utf8mb4`}
  below_text={
    <div>
    <p>If you don’t know how to use VIM:</p>
    <div>1. Once the file is open, hit <strong className='text-green-400'>“i”</strong> key <strong className='text-green-400'>  to start editing </strong> the file.</div>
    <div>2. After you’re <strong className='text-green-400'> done editing the file hit “Esc + :wq” to save the file </strong></div>
    </div>
  }
/>

<CopyCommand
  sub_step_name="3.4 Restart the MySQL server (for the config to take effect)"
  command={`sudo service mysql restart`}/>


      <CopyCommand
      step_name="4. Instal CURL, Node, NPM and Yarn"
      sub_step_name="4.1 Install CURL" command="sudo apt install curl"  below_text="Check if CURL is correctly installed by running curl --version " />

      <CopyCommand

      sub_step_name="4.2 Install Node" command={
        `curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash

source ~/.profile

nvm install 16.15.0`
      }/>
      <CopyCommand
      sub_step_name="4.3 Install NPM" command={
        `sudo apt-get install npm`
      } below_text="Check if Node is correctly installed by running node --version"/>

      <CopyCommand
      sub_step_name="4.4 Install Yarn" command={
        `ssudo npm install -g yarn`
      } below_text="Check if Node is correctly installed by running yarn --version"/>

      <CopyCommand
      step_name="5. INSTALL FRAPPE BENCH"
      sub_step_name="5.1 Install Frappe Bench" 
      command={
        `sudo pip3 install frappe-bench`
      } below_text="Check if Frappe Bench is correctly installed by running bench --version"/>

      <CopyCommand
      sub_step_name="5.2 Initialize Frappe Bench" 
      command={
        `bench init --frappe-branch version-14 frappe-bench`
      }/>


      <CopyCommand
      sub_step_name="5.3 Go to Frappe Bench directory" 
      command={
        `cd frappe-bench/`
      } 
      below_text="This will be the main directory from where we will be running all the commands.
The full path of this directory will be: /home/[frappe-user]/frappe-bench/" />

      <CopyCommand
      sub_step_name="5.4 Change user directory permissions" 
      command={
        `chmod -R o+rx /home/[frappe-user]/`
      } 
      below_text={
        <div>
        <p>This will allow execution permission to the home directory of the frappe user we created in step 1.4</p>
        <p>If you don't know the user jus use cmd: </p> <strong className='text-green-400'>whoami</strong>
        </div>
      } />

            <CopyCommand
      sub_step_name="5.5 Create a New Site" 
      command={
        `bench new-site site1.local`
      } 
      below_text={
        <div>
          <p>site1.local replace this with your site name its just example</p>
        </div>
      } />


      <CopyCommand
      step_name="6. Install ERPNext and other Apps"
      sub_step_name="6.1 Download the necessary apps to our server" 
      command={
        `bench get-app payments`
      } 
      below_text="bench get-app _____ <- your wise app also work  which is already provide by erp or custom app also work"/>

      <CopyCommand
      sub_step_name="6.1.1 Download the necessary apps to our server" 
      command={
        `bench get-app --branch version-15 erpnext`
      } 
      below_text="Download the main ERPNext app"/>



      <ul className='text-md p-4 border rounded-lg mb-6 bg-white dark:bg-gray-900 shadow-sm' >
        <HeadingIcon className=""  icon={ArrowBigUpDash} title='branch and patches downlaod' />
        
        <li className='py-2 mt-4' >bench get-app --branch version-15 erpnext</li>
        <p className='pt-4 leading-4'>for patches</p>
        <li>bench get-app erpnext --branch v15.33.3 // for specif verison Installation</li>
      </ul>



      <CopyCommand
      sub_step_name="6.2 Install all the Apps" 
      command={
        `bench --site site1.local install-app erpnext`
      } 
      below_text="Install the main ERPNext app"/>

      <h1 className='text-lg capitalize text-red-500 text-center pt-4' >If you want to setup a Production server then follow bellow steps</h1>
      <CopyCommand
      step_name="7. SETUP PRODUCTION SERVER"
      sub_step_name="7.1 Enable scheduler service" 
      command={
        `bench --site site1.local enable-scheduler`
      } />

      <CopyCommand
      sub_step_name="7.2 Disable maintenance mode" 
      command={
        `bench --site site1.local set-maintenance-mode off`
      } />
      <CopyCommand
      sub_step_name="7.3 Setup production config" 
      command={
        `sudo bench setup production [frappe-user]`
      }  below_text="[frappe-user] use username" />

      <CopyCommand
      sub_step_name="7.4 Setup NGINX web server" 
      command={
        `bench setup nginx`
      }  below_text="Check if GIT is correctly installed by running ngnix --version" />

      <CopyCommand
      sub_step_name="7.5 Final server setup" 
      command={
        `sudo supervisorctl restart all
sudo bench setup production [frappe-user]`
      }  below_text="When prompted to save new/existing config files, hit “Y”" />
</div>



<h1 className='w-full text-[10vw] font-bold text-center flex items-center justify-center gap-2 '> <Panda size={60} /> Thank you</h1>
    </div>




    </div>

    </ThemeProvider>
  )
}

export default App

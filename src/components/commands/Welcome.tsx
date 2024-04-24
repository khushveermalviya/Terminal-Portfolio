import myPhoto from '../khushveer.jpg'
import {
  Cmd,
  HeroContainer,
  Link,
  PreImg,
  PreName,
  PreNameMobile,
  PreWrapper,
  Seperator,
} from "../styles/Welcome.styled";

const Welcome: React.FC = () => {
  return (
    <HeroContainer data-testid="welcome">
      <div className="info-section">
        <PreName>
          {`        
██╗  ██╗██╗  ██╗██╗   ██╗███████╗██╗  ██╗██╗   ██╗███████╗███████╗██████╗     
██║ ██╔╝██║  ██║██║   ██║██╔════╝██║  ██║██║   ██║██╔════╝██╔════╝██╔══██╗    
█████╔╝ ███████║██║   ██║███████╗███████║██║   ██║█████╗  █████╗  ██████╔╝    
██╔═██╗ ██╔══██║██║   ██║╚════██║██╔══██║╚██╗ ██╔╝██╔══╝  ██╔══╝  ██╔══██╗    
██║  ██╗██║  ██║╚██████╔╝███████║██║  ██║ ╚████╔╝ ███████╗███████╗██║  ██║    
╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝ ╚══════╝╚═╝  ╚═╝  ╚═══╝  ╚══════╝╚══════╝╚═╝  ╚═╝    
                                                                              
          `}
        </PreName>
        <PreWrapper>
          <PreNameMobile>
            {`
███╗   ███╗ █████╗ ██╗    ██╗   ██╗██╗██╗   ██╗ █████╗ 
████╗ ████║██╔══██╗██║    ██║   ██║██║╚██╗ ██╔╝██╔══██╗
██╔████╔██║███████║██║    ██║   ██║██║ ╚████╔╝ ███████║
██║╚██╔╝██║██╔══██║██║    ╚██╗ ██╔╝██║  ╚██╔╝  ██╔══██║
██║ ╚═╝ ██║██║  ██║███████╗╚████╔╝ ██║   ██║   ██║  ██║
╚═╝     ╚═╝╚═╝  ╚═╝╚══════╝ ╚═══╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝
                                                       
 
          `}
          </PreNameMobile>
        </PreWrapper>
        <div>Welcome to my terminal portfolio. (Version 1.3.1)</div>
        <Seperator>----</Seperator>
        {/* <div>
          This project's source code can be found in this project's{" "}
          <Link href="https://github.com/satnaing/terminal-portfolio">
            GitHub repo
          </Link>
          .
        </div> */}
        <Seperator>----</Seperator>
        <div>
          For a list of available commands, type `<Cmd>help</Cmd>`.
        </div>
      </div>

    </HeroContainer>
  );
};

export default Welcome;

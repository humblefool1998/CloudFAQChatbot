/*
     POST /knowledgebases/"KEY"/generateAnswer
     Host: https://raktimqnaservice.azurewebsites.net/qnamaker
     Authorization: EndpointKey "KEY"
     Content-Type: application/json
     {"question":"<Your question>"}
*/   
const styleSet = window.WebChat.createStyleSet({
         bubbleBackground: 'rgba(0, 0, 255, .1)',
         bubbleFromUserBackground: 'rgba(0, 255, 0, .1)',
         rootHeight: '100%',
         rootWidth: '100%',
         backgroundColor: 'paleturquoise'
      });
      styleSet.textContent = {
         ...styleSet.textContent,
         fontFamily: "'Comic Sans MS', 'Arial', sans-serif",
         fontWeight: 'bold'
      };
     const avatarOptions = {
         botAvatarInitials: 'BOT',
         userAvatarInitials: 'USR'
         };

    window.WebChat.renderWebChat({
      directLine: window.WebChat.createDirectLine({
          token: 'ENTER TOKEN'}),   //QnA Maker generated token
         /*
         <iframe src='https://webchat.botframework.com/embed/raktimqnaservice-bot?s=YOUR_SECRET_HERE'  style='min-width: 400px; width: 100%; min-height: 500px;'></iframe>
         */
      styleSet,
      styleOptions: avatarOptions
    }, document.getElementById('webchat'));

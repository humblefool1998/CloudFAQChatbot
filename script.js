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
          token: 'ztbNafDL1qc.2fDYf6JC8e5fjpp3jeTi9aI4npXef52SKyQqOd6I5eY'}),   //QnA Maker generated token
      styleSet,
      styleOptions: avatarOptions
    }, document.getElementById('webchat'));
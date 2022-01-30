# FAQ based chatbot for school and college students to upskill their knowledge on Azure and Cloud Computing
## Deployed Project Demo Link
https://ambitious-island-02fd9b110.1.azurestaticapps.net
## Deployment Steps
1. First a QnA maker resource is created and is trained with the FAQ sources as mentioned below.
![1](https://user-images.githubusercontent.com/46521948/151712137-82492e8f-e6a9-4a7f-834c-d6c13b6ab3c8.png)
2. The Knowledge Base is then published and the endpoint is generated.
![2](https://user-images.githubusercontent.com/46521948/151712151-9c8e501c-9748-4822-a69d-5860bba0016a.png)
3. Then a Bot is initiated from Azure Bot service and is connected with the Knowledge Base (KB).
4. The embeddable web chat channel is initiated for the bot, and the Secret Keys are noted.
![4](https://user-images.githubusercontent.com/46521948/151712159-813d287e-8511-4bba-8e25-d49f967f1b6e.png)
5. Then a sample Web Chat interface is developed using HTML and Java Script and the secret keys are inserted into the code base.
6. Finally the web based chatbot is deployed in Azure Static Web apps using GitHub.
![6](https://user-images.githubusercontent.com/46521948/151712174-d9cb90dd-f17d-4a11-a226-61a33f41928d.png)

## Problem Statement
The global cloud computing market size is expected to grow from USD 445.3 billion in 2021 to USD 947.3 billion by 2026, at a Compound Annual Growth Rate (CAGR) of 16.3% during the forecast period. Thus, the requirement of cloud experts and developers is also expected to increase rapidly. Acknowledging the market size and the requirement of skilled resources, it is very crucial to understand the importance of cloud in details. The faster one starts, the better it gets. Now days, school and college students are also focusing into cloud at early stage of their careers but what they lack is a unified solution where they can clarify their doubts in case they face any difficulties during learning period.
## Solution
To address this problem in hand, I developed a FAQ based chatbot solution for school students so that they can clarify their queries related to cloud and Azure easily using a Conversational AI interface. . The QnA maker API extracts possible FAQs related to cloud and Azure from credible websites and Azure official documentation page and creates a Question-Answering layer on top of it. After this, using Azure Bot Service, a chatbot instance is initiated using webchat channel through which students can clarify their doubts using a Conversational AI interface from anywhere. 
## Snapshots of project demo:
![pic1](https://user-images.githubusercontent.com/46521948/151711429-6da223a8-99dc-431e-b707-56878bd7060e.png)
![pic2](https://user-images.githubusercontent.com/46521948/151711449-b7f79867-2738-4458-84d6-3ceb9b7f3eb9.png)
![pic3](https://user-images.githubusercontent.com/46521948/151711463-03f702f1-42cc-43ff-abbf-c768d4be9294.png)
![pic4](https://user-images.githubusercontent.com/46521948/151711480-4c7a636c-eb69-491c-9ccf-2fc936bceffa.png)
## Sources of FAQs
https://azure.microsoft.com/en-in/support/faq <br/>
https://www.interviewbit.com/cloud-computing-interview-questions <br/>
https://www.interviewbit.com/azure-interview-questions <br/>

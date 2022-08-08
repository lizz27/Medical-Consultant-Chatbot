# import requirements needed
from flask import Flask, request, redirect, url_for, render_template, session
from utils import get_base_url
from transformers import AutoModelForCausalLM, AutoTokenizer, AutoModelWithLMHead
import torch

# setup the webserver
# port may need to be changed if there are multiple flask servers running on same server
port = 14345
base_url = get_base_url(port)

tokenizer = AutoTokenizer.from_pretrained('microsoft/DialoGPT-small')
model = AutoModelWithLMHead.from_pretrained('model')

# if the base url is not empty, then the server is running in development, and we need to specify the static folder so that the static files are served
if base_url == '/':
    app = Flask(__name__)
else:
    app = Flask(__name__, static_url_path=base_url+'static')

# set up the routes and logic for the webserver
@app.route(f'{base_url}')
def home():
    return render_template('index.html')

@app.route(f'{base_url}/chat')
def chat():
    return render_template('redirectpage.html')

# set up the routes and logic for the webserver
@app.route(f'{base_url}/generation', methods=["POST"])
def generation():
    
    user_input = request.form['input']
    userInput = str(user_input)
    
    for step in range(1):
    # encode the new user input, add the eos_token and return a tensor in Pytorch
    
        new_user_input_ids = tokenizer.encode(str(user_input) + tokenizer.eos_token, return_tensors='pt')

    # append the new user input tokens to the chat history
        bot_input_ids = torch.cat([chat_history_ids, new_user_input_ids], dim=-1) if step > 0 else new_user_input_ids

    # generated a response while limiting the total chat history to 1000 tokens, 
        chat_history_ids = model.generate(
        bot_input_ids, max_length=200,
        pad_token_id=tokenizer.eos_token_id,  
        no_repeat_ngram_size=3,       
        do_sample=True, 
        top_k=100, 
        top_p=0.7,
        temperature=0.8
        )
    
    # pretty print last ouput tokens from bot
        generated = "{}".format(tokenizer.decode(chat_history_ids[:, bot_input_ids.shape[-1]:][0], skip_special_tokens=True))
        
    
    return render_template('redirectpage.html', generated = generated, userInput = userInput)

# define additional routes here
# for example:
# @app.route(f'{base_url}/team_members')
# def team_members():
#     return render_template('team_members.html') # would need to actually make this page

if __name__ == '__main__':
    # IMPORTANT: change url to the site where you are editing this file.
    website_url = 'cocalc14.ai-camp.dev'
    
    print(f'Try to open\n\n    https://{website_url}' + base_url + '\n\n')
    app.run(host = '0.0.0.0', port=port, debug=True)

# Python and MongoDB

Download the python - mongo package (local or global)

```bash
pip install pymongo
```

Using pymongo in a script

```python
from pymongo import MongoClient
from pprint import pprint

# connect to MongoDB, change the << MONGODB URL >> to reflect your own connection string
client = MongoClient(<<MONGODB URL>>)
db=client.admin

# Issue the serverStatus command and print the results
serverStatusResult=db.command("serverStatus")

pprint(serverStatusResult)
```

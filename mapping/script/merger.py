#    Copyright 2019 Benny Megidish

#    Licensed under the Apache License, Version 2.0 (the "License");
#    you may not use this file except in compliance with the License.
#    You may obtain a copy of the License at

#        http://www.apache.org/licenses/LICENSE-2.0

#    Unless required by applicable law or agreed to in writing, software
#    distributed under the License is distributed on an "AS IS" BASIS,
#    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
#    See the License for the specific language governing permissions and
#    limitations under the License.

import os
import codecs
import json
from googletrans import Translator

"""
This script combines all possible country destinations into json files
@author Benny Megidish
"""

def _getAdjacentDirectory(adjacentDirectoryName):
    return os.path.join(os.path.dirname(os.getcwd()), adjacentDirectoryName)

def getEnMappingDirectory():
    return _getAdjacentDirectory("en")

def getHeMappingDirectory():
    return _getAdjacentDirectory("he")

def getOutputDirectory():
    return _getAdjacentDirectory("data")

def createEnCountryDict(filename):
    en_country_map = open(os.path.join(getEnMappingDirectory(), filename))
    en_country_dict = dict()

    for line in en_country_map:
        (_id, name) = line.split(', ', 1)
        en_country_dict[_id] = name

    return en_country_dict

def translate(text):
    try:
        translated_name = translator.translate(text, src='iw', dest='en').text
    except:
        translated_name = "TODO_" + text

    return translated_name

def merge(mappingSourceFilename, debug=False):
    ''' iterates over every csv file int the input directory and generate an English dictionary for each file '''

    he_directory_path = getHeMappingDirectory()
    he_directory = os.fsencode(he_directory_path)
    output_directory_path = getOutputDirectory()
    en_country_dict = createEnCountryDict(mappingSourceFilename)

    for _file in os.listdir(he_directory):
        filename = os.fsdecode(_file)

        if filename.endswith(".csv"):
            input_file_path = os.path.join(he_directory_path, filename)
            method_type = filename.replace(".csv", "-").split('-')[2].upper()
            method_type = "ALL" if method_type == '' else method_type
            output_file_path = os.path.join(output_directory_path, filename).replace(".csv", ".json")
            output_dict_file = dict()

            # read input country csv file
            with open(input_file_path, "r", encoding="utf8") as map_file:
                # create output country json file
                for line in map_file:
                    (_id, name) = line.split(', ', 1)
                    name = name.rstrip()

                    if en_country_dict.__contains__(_id):
                        output_dict_file[en_country_dict[_id].rstrip()] = {'id': _id, 'name': name}
                        #map_file.write('%s, %s' % (line.rstrip(), en_country_dict[_id]))

                        if debug:
                            translated_name = translate(name)
                            print("%s: %s -> %s [%s]" % (method_type, name[::-1], en_country_dict[_id].rstrip(), translated_name))
                    else:
                        translated_name = translate(name)

                        output_dict_file[translated_name] = {'id': _id, 'name': name} 
                        print("%s: Can't translate %s into English, defaulting to %s (google)" % (method_type, name[::-1], translated_name))
                        #map_file.write('%s, %s\n' % (line.rstrip(), "TODO")) 

            if (output_dict_file != None):
                # save output json file
                os.makedirs(getOutputDirectory(), exist_ok=True)
                with codecs.open(output_file_path, "w", encoding="utf-8-sig") as map_file:
                    json.dump(output_dict_file, map_file)          

if __name__ == "__main__":
    translator = Translator()
    merge('destination-map.csv')
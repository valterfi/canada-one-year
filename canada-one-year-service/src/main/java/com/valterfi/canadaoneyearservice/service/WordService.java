package com.valterfi.canadaoneyearservice.service;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.valterfi.canadaoneyearservice.domain.Phrase;
import com.valterfi.canadaoneyearservice.domain.Word;
import com.valterfi.canadaoneyearservice.dto.WordDTO;
import com.valterfi.canadaoneyearservice.repository.PhraseRepository;
import com.valterfi.canadaoneyearservice.repository.WordRepository;

@Service
public class WordService {

	@Autowired
	public WordRepository wordRepository;

	@Autowired
	public PhraseRepository phraseRepository;

	public List<WordDTO> list() {
		return wordRepository.list();
	}

	public void save(Phrase phrase) {
		List<String> ignoreItens = new ArrayList<String>(Arrays.asList("de", "da", "do", "das", "dos", "em", "uma",
				"um", "umas", "uns", "por", "a", "e", "i", "o", "u", "as", "os", "para", "pra", "pro", "é", "és", "à",
				"às", "ao", "aos", "ou", "pelo", "pelos", "pela", "pelas", "no", "nos", "na", "nas", "naquele",
				"naquela", "naqueles", "naquelas", "aquele", "aqueles", "aquela", "aquelas", "que", "quais", "quem",
				"qual", "esse", "essa", "esses", "essas", "desse", "dessa", "desses", "dessas", ",", ";", ".", "...",
				":", "!", "?"));

		String[] singleWords = phrase.getDescription().split(" ");
		for (String singleWord : singleWords) {
			Word newWord = new Word();

			String description = singleWord.trim();
			if (!ignoreItens.contains(description)) {
				newWord.setDescription(singleWord.trim());
				newWord.setIp(phrase.getIp());
				newWord.setTimestamp(new Timestamp(System.currentTimeMillis()));
				wordRepository.save(newWord);
			}
		}

		phrase.setTimestamp(new Timestamp(System.currentTimeMillis()));
		phraseRepository.save(phrase);
	}

}

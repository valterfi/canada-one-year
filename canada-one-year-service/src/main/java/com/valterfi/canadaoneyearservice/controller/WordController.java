package com.valterfi.canadaoneyearservice.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.valterfi.canadaoneyearservice.domain.Phrase;
import com.valterfi.canadaoneyearservice.domain.Word;
import com.valterfi.canadaoneyearservice.dto.WordDTO;
import com.valterfi.canadaoneyearservice.service.WordService;

@RestController
@RequestMapping("/words")
@CrossOrigin(origins = {"*"})
public class WordController {

	@Autowired
	public WordService wordService;

	@GetMapping("")
	public List<WordDTO> list() {
		return wordService.list();
	}

	@GetMapping("/ping")
	public ResponseEntity<Word> ping() {
		return new ResponseEntity<Word>(new Word(), HttpStatus.OK);
	}

	@PostMapping("")
	public ResponseEntity<Phrase> add(@RequestBody Phrase phrase) {
		if (phrase.getId() == null) {
			wordService.save(phrase);
			return new ResponseEntity<Phrase>(phrase, HttpStatus.CREATED);
		} else {
			return new ResponseEntity<Phrase>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

}

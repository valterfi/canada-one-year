package com.valterfi.canadaoneyearservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.valterfi.canadaoneyearservice.domain.Phrase;

@Repository
public interface PhraseRepository extends JpaRepository<Phrase, Long> {

}

package io.github.jhipster.application.service.impl;

import io.github.jhipster.application.service.UsersService;
import io.github.jhipster.application.domain.Users;
import io.github.jhipster.application.repository.UsersRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

/**
 * Service Implementation for managing Users.
 */
@Service
@Transactional
public class UsersServiceImpl implements UsersService {

    private final Logger log = LoggerFactory.getLogger(UsersServiceImpl.class);

    private final UsersRepository usersRepository;

    public UsersServiceImpl(UsersRepository usersRepository) {
        this.usersRepository = usersRepository;
    }

    /**
     * Save a users.
     *
     * @param users the entity to save
     * @return the persisted entity
     */
    @Override
    public Users save(Users users) {
        log.debug("Request to save Users : {}", users);
        return usersRepository.save(users);
    }

    /**
     * Get all the users.
     *
     * @return the list of entities
     */
    @Override
    @Transactional(readOnly = true)
    public List<Users> findAll() {
        log.debug("Request to get all Users");
        return usersRepository.findAllWithEagerRelationships();
    }

    /**
     * Get all the Users with eager load of many-to-many relationships.
     *
     * @return the list of entities
     */
    public Page<Users> findAllWithEagerRelationships(Pageable pageable) {
        return usersRepository.findAllWithEagerRelationships(pageable);
    }
    


    /**
     *  get all the users where Coordinates is null.
     *  @return the list of entities
     */
    @Transactional(readOnly = true) 
    public List<Users> findAllWhereCoordinatesIsNull() {
        log.debug("Request to get all users where Coordinates is null");
        return StreamSupport
            .stream(usersRepository.findAll().spliterator(), false)
            .filter(users -> users.getCoordinates() == null)
            .collect(Collectors.toList());
    }

    /**
     * Get one users by id.
     *
     * @param id the id of the entity
     * @return the entity
     */
    @Override
    @Transactional(readOnly = true)
    public Optional<Users> findOne(Long id) {
        log.debug("Request to get Users : {}", id);
        return usersRepository.findOneWithEagerRelationships(id);
    }

    /**
     * Delete the users by id.
     *
     * @param id the id of the entity
     */
    @Override
    public void delete(Long id) {
        log.debug("Request to delete Users : {}", id);
        usersRepository.deleteById(id);
    }
}

<?php

function idmod_publications_author($form, &$form_state, $arg1) {
  $form = array();
  $debug_url = $_GET['q'];
  
  $form['publications'] = array(
    '#type' => 'fieldset',
    '#prefix' => '<div class="team-menu-wrap">',
    '#suffix' => '</div>',
  );
  
  $form['publications']['publications1'] = array(
    '#type' => 'item',
    '#markup' => '<ul class="level-3 inline" id="team">
   
                  <li class="publications-1" id="author">
                    <a href="/publications/author">Author</a>
                  </li>
                  
                  <li class="publications-1" id="date">
                    <a href="/publications/date">Date</a>
                  </li>                               
                  
                  <li class="publications-1" id="topic">
                    <a href="/publications/topic">Topic</a>
                  </li>
                </ul>',

    '#prefix' => '<div class="team-menu" style="clear: left">',
    '#suffix' => '</div>',
  );  
  
  $form['publications']['author'] = array(
    '#type' => 'select',
    '#options' => array(
      'all' => t('All'),
      '9' => t('Basil Bayati'),
      '46' => t('Matthew Behrend'),
      '13' => t('Anna Bershteyn'),
      '3' => t('Guillaume Chabot-Couture'),
      '8' => t('Philp Eckhoff'),
      '22' => t('Hao Hu'),
      '7' => t('Dan Klein'),
      '23' => t('Hil Lions'),
      '45' => t('Karimia Nigmatulina'),
      '12' => t('Alexander Upfill-Brown'),
      '15' => t('Bradley Wagner'),
      '4' => t('Edward Wenger'),
      
    ),
    
    '#ajax' => array(
      'callback' => 'idmod_publications_author_callback',
      'wrapper' => 'replace_view_div',
     ),    
    '#default_value' => NULL,
    '#required' => TRUE,
    '#prefix' => '<div class="level-3  level-3a inline hidden">',
    '#suffix' => '</div>',   
  );
    
  $form['publications']['publications3'] = array(
    '#type' => 'item',
    '#markup' => '<ul class="level-3  level-3b inline hidden" id="team-research">
                  <li id="2011">
                    <a href="/publications/date/2011">2011</a>
                  </li>
                  <li id="2012">
                    <a href="/publications/date/2012">2012</a>
                  </li>
                  <li id="2013">
                    <a href="/publications/date/2013">2013</a>
                  </li>
                  <li id="2014">
                    <a href="/publications/date/2014">2014</a>
                  </li>                  
                </ul>',

    '#prefix' => '<div class="team-menu" style="clear: left">',
    '#suffix' => '</div>',
  );
    
  $form['publications']['publications4'] = array(
    '#type' => 'item',
    '#markup' => '<ul class="level-3  level-3c inline hidden" id="team-research">
                  <li id="hiv">
                    <a href="/publications/topic/hiv">HIV</a>
                  </li>
                  <li id="malaria">
                    <a href="/publications/topic/malaria">Malaria</a>
                  </li>
                  <li id="numerical">
                    <a href="/publications/topic/numerical">Numerical Methods</a>
                  </li>
                  <li id="polio">
                    <a href="/publications/topic/polio">Polio</a>
                  </li>
                  <li id="tuberculosis">
                    <a href="/publications/topic/tuberculosis">Tuberculosis</a>
                  </li>	                    
                </ul>',

    '#prefix' => '<div class="team-menu" style="clear: left">',
    '#suffix' => '</div>',
  );
  // If the URL is ajax, we need to clear the URL so the "Author" page gets displayed.
  if ($_GET['q'] == 'system/ajax') {
    $arg1 = NULL;
  }
  if (!isset($form_state['triggering_element']['#value']) ||
      $form_state['triggering_element']['#value'] == 'all') {
    $display_id = 'page_1';
    $arg = NULL;
  }
  else {
    $display_id = 'dynamic';
    $arg = $form_state['triggering_element']['#value'];
  }
  
  if ($arg1 == 'hiv') {
    $display_id = 'hiv';
    $arg = NULL;
  }
  if ($arg1 == 'malaria') {
    $display_id = 'malaria';
    $arg = NULL;
  }
  if ($arg1 == 'numercial') {
    $display_id = 'numerical';
    $arg = NULL;
  }
  if ($arg1 == 'polio') {
    $display_id = 'polio';
    $arg = NULL;
  }  
  if ($arg1 == 'tuberculosis') {
    $display_id = 'tubercolosis';
    $arg = NULL;
  }
  if ($arg1 == '2011') {
    $display_id = '2011';
    $arg = NULL;
  }
  if ($arg1 == '2012') {
    $display_id = '2012';
    $arg = NULL;
  }
  if ($arg1 == '2013') {
    $display_id = '2013';
    $arg = NULL;
  }
  if ($arg1 == '2014') {
    $display_id = '2014';
    $arg = NULL;
  }   
  
  
  
  $view_name = 'publications';

  $view_output = views_embed_view($view_name, $display_id, $arg);
  $form['content'] = array(
    '#type' => 'item',
    '#markup' => $view_output,
    '#prefix' => '<div id="replace_view_div">',
    '#suffix' => '</div>',
  );

  return $form;
}

/*
 *  Callback for ajax reference for author filter
 */

function idmod_publications_author_callback($form, $form_state) {
  // Respond to click on author.
  
  $debug_form = $form;
  $debug_value = $form_state['triggering_element']['#value'];
  return $form['content'];
}